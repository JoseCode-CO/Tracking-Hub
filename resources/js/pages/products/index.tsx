import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface Products {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
}

export default function Index({ products }: { products: Products[] }) {
    const total = products.reduce((sum, product) => sum + product.price * product.stock, 0);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Productos" />
            {products.length > 0 ? (
                <Table>
                    <TableCaption>Lista de productos disponibles.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Descripción</TableHead>
                            <TableHead className="text-right">Stock</TableHead>
                            <TableHead className="text-right">Precio</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell className="text-right">{product.stock}</TableCell>
                                <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>Total inventario</TableCell>
                            <TableCell className="text-right">${total.toFixed(2)}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </AppLayout>
    );
}
