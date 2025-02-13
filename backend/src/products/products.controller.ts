

 {}


import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService} from './products.service';
import { Product } from './schemas/product.schema';

@Controller('kraken') // Définit la route de base "/kraken"
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  getKrakenData() {
    return { message: 'API Kraken fonctionne !' }; // ✅ Répondra à GET /kraken
  }
  /*@Post()
  async importProducts(@Body() products: Product[]) {
    return this.productService.createProducts(products);
  }*/

  @Post()
  postKrakenData(@Body() data: any) {
    console.log('Données reçues :', data);
    return { message: 'Données reçues avec succès', data };
  }
}
