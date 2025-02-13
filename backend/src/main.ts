import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 

   // ✅ Autoriser les requêtes depuis localhost:4200
   app.enableCors({
    origin: 'http://localhost:4200', // Permet seulement Angular en local
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  });

  await app.listen(process.env.PORT ?? 3000) ;
  console.log(`🚀 Serveur NestJS en écoute sur http://localhost:3000`);
}
bootstrap();
