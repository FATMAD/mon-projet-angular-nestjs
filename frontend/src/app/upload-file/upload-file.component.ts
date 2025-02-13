import { Component } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service'; // Importation du service
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-upload-file', // Nom du composant utilisé dans les templates
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  constructor(private uploadExcelService: FileUploadService) {}
importedData: any[] = [];
displayedColumns: string[] = [];

onFileChange(event: any) {
  const target: DataTransfer = <DataTransfer>(event.target);
  if (target.files.length !== 1) {
    console.error('Veuillez sélectionner un seul fichier.');
    return;
  }

  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    const binaryString: string = e.target.result;
    const workbook: XLSX.WorkBook = XLSX.read(binaryString, { type: 'binary' });

    const sheetName: string = workbook.SheetNames[0];
    let sheetData: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // ✅ Transformer les données en appliquant les règles
    let uniqueData: { [key: string]: any } = {};

    sheetData.forEach((row: any) => {
      const name = row["Name"] ?? "Inconnu"; // ✅ Vérifie si le nom existe

      uniqueData[name] = { // ✅ Remplace automatiquement les doublons par la dernière occurrence
        name,
        updated_at: this.formatDate(row["UpdatedOn"]),
        prices: this.formatPrices(row["Prices"]),
        rate: row["Rate %"] ? parseFloat(row["Rate %"]) : 0,
        category: this.deduceCategory(name)
      };
    });

    // Convertir l'objet uniqueData en tableau
    this.importedData = Object.values(uniqueData);
    this.displayedColumns = Object.keys(this.importedData[0] || {});
  };

  reader.readAsBinaryString(target.files[0]);
}

// ✅ Fonction pour formater les dates en ISO 8601 (YYYY-MM-DD)
formatDate(dateValue: any): string {
  if (!dateValue) return 'N/A';

  const parsedDate = new Date(dateValue);
  if (isNaN(parsedDate.getTime())) {
    const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    const match = dateValue.toString().match(regex);
    if (match) {
      const day = match[1];
      const month = match[2];
      const year = match[3];
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    return 'N/A';
  }
  
  return parsedDate.toISOString().split('T')[0]; // ✅ Retourne YYYY-MM-DD
}

// ✅ Fonction pour formater les prix et remplacer les valeurs négatives par 0
formatPrices(prices: any): number[] {
  if (!prices) return [];

  return prices.toString()
    .split(/[,;]/) // ✅ Sépare par "," ou ";"
    .map((p: string) => {
      let num = parseFloat(p.trim());
      return isNaN(num) || num < 0 ? 0 : num; // ✅ Remplace les valeurs négatives par 0
    });
}

// ✅ Fonction pour déduire la catégorie (`product` ou `equipment`)
deduceCategory(name: string): string {
  return name.toLowerCase().includes('product') ? 'product' : 'equipment';
}


uploadData() {
  this.uploadExcelService.uploadData(this.importedData).subscribe(
    response => console.log('Upload réussi', response),
    error => console.error('Erreur d’upload', error)
  );
}
}