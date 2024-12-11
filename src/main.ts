import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { environment } from "./infrastructure/config/environments/env";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(environment.port);
}
bootstrap();
