"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, MapPin, Phone, ShoppingCart, Plus, Minus } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  vegetarian?: boolean;
}

export default function RestaurantDetailPage() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const restaurant = {
    id: "r998",
    name: "Spice Villa",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    cuisine: "Indian, North Indian, Tandoor",
    rating: 4.5,
    reviews: 1250,
    deliveryTime: "30-40 min",
    distance: "2.5 km",
    address: "12 MG Road, Bangalore",
    phone: "+91 98765 43210",
  };

  const menuItems: MenuItem[] = [
    {
      id: "I1001",
      name: "Paneer Butter Masala",
      description: "Cottage cheese in creamy tomato gravy",
      price: 180,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
      category: "Main Course",
      vegetarian: true
    },
    {
      id: "I2003",
      name: "Garlic Naan",
      description: "Soft bread with garlic and butter",
      price: 40,
      image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80",
      category: "Breads",
      vegetarian: true
    },
    {
      id: "I1002",
      name: "Chicken Tikka Masala",
      description: "Grilled chicken in spicy tomato curry",
      price: 220,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
      category: "Main Course",
    },
    {
      id: "I1003",
      name: "Dal Makhani",
      description: "Black lentils cooked with butter and cream",
      price: 160,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80",
      category: "Main Course",
      vegetarian: true
    },
    {
      id: "I2001",
      name: "Butter Naan",
      description: "Classic Indian flatbread",
      price: 35,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
      category: "Breads",
      vegetarian: true
    },
    {
      id: "I3001",
      name: "Gulab Jamun",
      description: "Sweet dumplings in sugar syrup",
      price: 60,
      image: "https://images.unsplash.com/photo-1589301773859-bb024d3f4c5a?w=400&q=80",
      category: "Desserts",
      vegetarian: true
    },
  ];

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  const addToCart = (itemId: string) => {
    setCart(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
    const item = menuItems.find(i => i.id === itemId);
    return total + (item?.price || 0) * quantity;
  }, 0);

  const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen">
      {/* Restaurant Header */}
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg opacity-90">{restaurant.cuisine}</p>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{restaurant.rating}</span>
              <span className="text-muted-foreground">({restaurant.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{restaurant.distance} • {restaurant.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-5 w-5" />
              <span>{restaurant.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Items */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            
            {categories.map((category) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="space-y-4">
                  {menuItems
                    .filter(item => item.category === category)
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative w-full sm:w-32 h-32 flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 p-4 sm:p-0 sm:py-4">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold">{item.name}</h4>
                                    {item.vegetarian && (
                                      <Badge variant="outline" className="text-green-600 border-green-600">
                                        Veg
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-4">
                                <span className="text-lg font-semibold">₹{item.price}</span>
                                {cart[item.id] ? (
                                  <div className="flex items-center space-x-3 border rounded-lg px-3 py-1">
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="h-6 w-6"
                                      onClick={() => removeFromCart(item.id)}
                                    >
                                      <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="font-semibold w-6 text-center">
                                      {cart[item.id]}
                                    </span>
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="h-6 w-6"
                                      onClick={() => addToCart(item.id)}
                                    >
                                      <Plus className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <Button onClick={() => addToCart(item.id)}>
                                    Add to Cart
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Sidebar */}
          {cartItemCount > 0 && (
            <div className="lg:w-80">
              <div className="sticky top-20">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Your Cart
                      </h3>
                      <Badge>{cartItemCount} items</Badge>
                    </div>
                    <Separator className="mb-4" />
                    <div className="space-y-3 mb-4">
                      {Object.entries(cart).map(([itemId, quantity]) => {
                        const item = menuItems.find(i => i.id === itemId);
                        if (!item) return null;
                        return (
                          <div key={itemId} className="flex justify-between items-center">
                            <div className="flex-1">
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-muted-foreground">
                                ₹{item.price} × {quantity}
                              </p>
                            </div>
                            <span className="font-semibold">₹{item.price * quantity}</span>
                          </div>
                        );
                      })}
                    </div>
                    <Separator className="mb-4" />
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>₹{cartTotal}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Delivery Fee</span>
                        <span>₹30</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Taxes</span>
                        <span>₹{Math.round(cartTotal * 0.05)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₹{cartTotal + 30 + Math.round(cartTotal * 0.05)}</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
