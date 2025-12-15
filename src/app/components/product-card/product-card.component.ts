import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

    @Input() product!: Product;

    constructor(private productService: ProductService) { }

    eliminar() {
        if (this.product && this.product._id) {
            this.productService.eliminarProducto(this.product._id);
        }
    }
}
