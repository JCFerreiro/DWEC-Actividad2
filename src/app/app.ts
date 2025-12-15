import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from './services/product.service';
import { ProductsList } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductsList,
    ProductFormComponent,
    ProductFilterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-productos');

  // productos: Product[] = []; // No lo necesitamos aquí, lo gestiona el ProductsList

  constructor(private productService: ProductService) {
    // Cargamos los productos iniciales
    this.productService.cargarProductos();
  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }
}
