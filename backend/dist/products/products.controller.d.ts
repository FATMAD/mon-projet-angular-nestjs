import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getKrakenData(): {
        message: string;
    };
    postKrakenData(data: any): {
        message: string;
        data: any;
    };
}
