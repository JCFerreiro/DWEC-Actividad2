import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    active: boolean;
}

export interface FilterOptions {
    name: string;
    category: string;
    price: number | null;
    active: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private url = 'https://api.npoint.io/1dee63ad8437c82b24fe';

    private productosSubject = new BehaviorSubject<Product[]>([]);
    productos$ = this.productosSubject.asObservable();

    private productosOriginales: Product[] = [];

    private currentFilters: FilterOptions = {
        name: '',
        category: '',
        price: null,
        active: false
    };

    constructor(private http: HttpClient) { }

    cargarProductos() {
        this.http.get<Product[]>(this.url).subscribe({
            next: (productos) => {
                console.log('API cargada correctamente:', productos);
                this.productosOriginales = productos;
                this.aplicarFiltros();
            },
            error: (err) => console.error('Error al cargar productos:', err)
        });
    }

    agregarProducto(datos: any) {
        const nuevoProducto: Product = {
            _id: crypto.randomUUID(),
            name: datos.name,
            description: datos.description,
            price: datos.price,
            category: datos.category,
            image: datos.image,
            active: datos.active
        };

        this.productosOriginales = [nuevoProducto, ...this.productosOriginales];
        this.aplicarFiltros();
    }

    eliminarProducto(id: string) {
        this.productosOriginales = this.productosOriginales.filter(p => p._id !== id);
        this.aplicarFiltros();
    }

    actualizarFiltros(filtros: Partial<FilterOptions>) {
        this.currentFilters = { ...this.currentFilters, ...filtros };
        this.aplicarFiltros();
    }

    private aplicarFiltros() {
        let filtrados = [...this.productosOriginales];

        if (this.currentFilters.name) {
            const termino = this.currentFilters.name.toLowerCase();
            filtrados = filtrados.filter(p => p.name.toLowerCase().includes(termino));
        }

        if (this.currentFilters.category) {
            const termino = this.currentFilters.category.toLowerCase();
            filtrados = filtrados.filter(p => p.category.toLowerCase().includes(termino));
        }

        if (this.currentFilters.price !== null && this.currentFilters.price > 0) {
            filtrados = filtrados.filter(p => p.price <= this.currentFilters.price!);
        }

        if (this.currentFilters.active) {
            filtrados = filtrados.filter(p => p.active === true);
        }

        this.productosSubject.next(filtrados);
    }
}
