import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/testdb'), // Connexion à MongoDB
    ProductsModule, // Import du module des produits
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
