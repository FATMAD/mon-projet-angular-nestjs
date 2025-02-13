import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ unique: true, required: true }) // Assure l'unicité du champ "name"
  name: string;

  @Prop({ required: true }) // La date est obligatoire
  updated_at: string; // Format ISO 8601 (YYYY-MM-DD)

  @Prop({ type: [Number], default: [] }) // Tableau de prix, vide par défaut
  prices: number[];

  @Prop({ required: true, default: 0 }) // Taux par défaut à 0
  rate: number;

  @Prop({ enum: ['product', 'equipment'], required: true }) // Catégorie obligatoire
  category: 'product' | 'equipment';
}

// Génération du schéma Mongoose
export const ProductSchema = SchemaFactory.createForClass(Product);
