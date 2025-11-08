"use client";

import { RestaurantCard } from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Clock, Shield, Percent } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const featuredRestaurants = [
    {
      id: "r998",
      name: "Spice Villa",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      cuisine: "Indian, North Indian, Tandoor",
      rating: 4.5,
      deliveryTime: "30-40 min",
      distance: "2.5 km",
      discount: "50% OFF"
    },
    {
      id: "r999",
      name: "Pizza Paradise",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
      cuisine: "Italian, Pizza, Pasta",
      rating: 4.7,
      deliveryTime: "25-35 min",
      distance: "1.8 km",
      discount: "40% OFF"
    },
    {
      id: "r1000",
      name: "Burger House",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      cuisine: "American, Burgers, Fast Food",
      rating: 4.3,
      deliveryTime: "20-30 min",
      distance: "3.2 km",
    },
    {
      id: "r1001",
      name: "Sushi Express",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      cuisine: "Japanese, Sushi, Asian",
      rating: 4.8,
      deliveryTime: "35-45 min",
      distance: "4.1 km",
      discount: "30% OFF"
    },
    {
      id: "r1002",
      name: "Thai Delight",
      image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80",
      cuisine: "Thai, Asian, Noodles",
      rating: 4.6,
      deliveryTime: "30-40 min",
      distance: "2.8 km",
    },
    {
      id: "r1003",
      name: "Biryani Palace",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
      cuisine: "Indian, Biryani, Mughlai",
      rating: 4.4,
      deliveryTime: "40-50 min",
      distance: "3.5 km",
      discount: "20% OFF"
    },
  ];

  const cuisineCategories = [
    "Indian",
    "Chinese",
    "Italian",
    "Thai",
    "Mexican",
    "Japanese",
    "American",
    "Fast Food"
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCuisineClick = (cuisine: string) => {
    router.push(`/restaurants?cuisine=${encodeURIComponent(cuisine)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Delicious Food,{" "}
              <span className="text-primary">Delivered Fast</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Order from your favorite restaurants and get it delivered to your doorstep in minutes
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto pt-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for restaurants, cuisines, or dishes..."
                  className="pl-12 h-14 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button size="lg" className="h-14 px-8" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Get your food delivered in 30 minutes or less
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Safe & Secure</h3>
              <p className="text-sm text-muted-foreground">
                Contactless delivery and secure payments
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Percent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Best Offers</h3>
              <p className="text-sm text-muted-foreground">
                Save more with exclusive deals and discounts
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Live Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Track your order in real-time from kitchen to doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Explore by Cuisine
          </h2>
          <div className="flex flex-wrap gap-3">
            {cuisineCategories.map((cuisine) => (
              <Badge
                key={cuisine}
                variant="secondary"
                className="px-6 py-2 text-base cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleCuisineClick(cuisine)}
              >
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured Restaurants
            </h2>
            <Button variant="outline" onClick={() => router.push("/restaurants")}>View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Order?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of happy customers and enjoy delicious food delivered to your door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-base px-8" onClick={() => router.push("/restaurants")}>
              Browse Restaurants
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}