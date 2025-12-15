import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-filter',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './product-filter.component.html'
})
export class ProductFilterComponent {

    filtros = {
        name: '',
        category: '',
        price: null,
        active: false
    };

    constructor(private productService: ProductService) { }

    aplicarFiltros() {
        this.productService.actualizarFiltros(this.filtros);
    }
}
