import React from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  category: string
  status: "available" | "out_of_stock"
  imageUrl: string // Added image URL field
}

const ProductsPage = () => {
  // This would be replaced with actual data fetching
  const products: Product[] = [
    {
      id: "1",
      name: "Organic Tomatoes",
      price: 2.99,
      quantity: 100,
      category: "Vegetables",
      status: "available",
      imageUrl: "/images/tomatoes.jpg" // Add sample image path
    },
    // Add more sample products as needed
  ]

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Products</h1>
        <Link href="/dashboard/products/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </Link>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="h-24"> {/* Increased row height */}
                <TableCell className="w-24">
                  <div className="relative w-20 h-20">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    product.status === "available" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {product.status === "available" ? "Available" : "Out of Stock"}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ProductsPage