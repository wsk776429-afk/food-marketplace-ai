"use client";

import { RestaurantCard } from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function RestaurantsPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const cuisine = searchParams.get("cuisine") || "All Cuisines";
    setSearchQuery(search);
    setSelectedCuisine(cuisine);
  }, [searchParams]);

  const restaurants = [
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
    {
      id: "r1004",
      name: "Cafe Mocha",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
      cuisine: "Cafe, Coffee, Beverages",
      rating: 4.2,
      deliveryTime: "15-25 min",
      distance: "1.2 km",
    },
    {
      id: "r1005",
      name: "Chinese Wok",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80",
      cuisine: "Chinese, Asian, Noodles",
      rating: 4.5,
      deliveryTime: "30-40 min",
      distance: "2.9 km",
      discount: "25% OFF"
    },
    {
      id: "r1006",
      name: "Dessert Dreams",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      cuisine: "Desserts, Ice Cream, Sweets",
      rating: 4.9,
      deliveryTime: "20-30 min",
      distance: "1.5 km",
    },
    {
      id: "r1007",
      name: "Taco Fiesta",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
      cuisine: "Mexican, Tacos, Burritos",
      rating: 4.6,
      deliveryTime: "25-35 min",
      distance: "2.3 km",
      discount: "35% OFF"
    },
    {
      id: "r1008",
      name: "Seoul Kitchen",
      image: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?w=800&q=80",
      cuisine: "Korean, BBQ, Kimchi",
      rating: 4.7,
      deliveryTime: "35-45 min",
      distance: "3.8 km",
    },
    {
      id: "r1009",
      name: "Mediterranean Breeze",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      cuisine: "Mediterranean, Greek, Healthy",
      rating: 4.5,
      deliveryTime: "30-40 min",
      distance: "2.7 km",
      discount: "30% OFF"
    },
    {
      id: "r1010",
      name: "Le Petit Bistro",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      cuisine: "French, European, Fine Dining",
      rating: 4.9,
      deliveryTime: "45-55 min",
      distance: "4.5 km",
    },
    {
      id: "r1011",
      name: "Pho Street",
      image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=80",
      cuisine: "Vietnamese, Pho, Noodles",
      rating: 4.6,
      deliveryTime: "30-40 min",
      distance: "3.1 km",
      discount: "20% OFF"
    },
    {
      id: "r1012",
      name: "Shawarma Express",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80",
      cuisine: "Middle Eastern, Lebanese, Halal",
      rating: 4.4,
      deliveryTime: "20-30 min",
      distance: "1.9 km",
      discount: "25% OFF"
    },
    {
      id: "r1013",
      name: "Brazil Grill",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      cuisine: "Brazilian, BBQ, South American",
      rating: 4.7,
      deliveryTime: "40-50 min",
      distance: "4.2 km",
    },
    {
      id: "r1014",
      name: "Tapas Barcelona",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      cuisine: "Spanish, Tapas, Paella",
      rating: 4.8,
      deliveryTime: "35-45 min",
      distance: "3.6 km",
      discount: "30% OFF"
    },
    {
      id: "r1015",
      name: "Istanbul Kebab",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
      cuisine: "Turkish, Kebab, Mediterranean",
      rating: 4.5,
      deliveryTime: "30-40 min",
      distance: "2.6 km",
    },
    {
      id: "r1016",
      name: "Dragon Dim Sum",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
      cuisine: "Chinese, Dim Sum, Cantonese",
      rating: 4.6,
      deliveryTime: "25-35 min",
      distance: "2.2 km",
      discount: "20% OFF"
    },
    {
      id: "r1017",
      name: "Ethiopian Spice",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
      cuisine: "Ethiopian, African, Vegetarian",
      rating: 4.4,
      deliveryTime: "35-45 min",
      distance: "3.9 km",
    },
    {
      id: "r1018",
      name: "Caribbean Vibes",
      image: "https://images.unsplash.com/photo-1562158147-f8c0c86e8e5e?w=800&q=80",
      cuisine: "Caribbean, Jerk Chicken, Island",
      rating: 4.6,
      deliveryTime: "30-40 min",
      distance: "3.3 km",
      discount: "25% OFF"
    },
    {
      id: "r1019",
      name: "German Beer House",
      image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=800&q=80",
      cuisine: "German, European, Beer",
      rating: 4.5,
      deliveryTime: "35-45 min",
      distance: "4.0 km",
    },
    {
      id: "r1020",
      name: "Moroccan Nights",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
      cuisine: "Moroccan, African, Tagine",
      rating: 4.7,
      deliveryTime: "40-50 min",
      distance: "4.3 km",
      discount: "30% OFF"
    },
    {
      id: "r1021",
      name: "Ramen House",
      image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&q=80",
      cuisine: "Japanese, Ramen, Noodles",
      rating: 4.8,
      deliveryTime: "30-40 min",
      distance: "2.4 km",
    },
    {
      id: "r1022",
      name: "Argentine Steakhouse",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      cuisine: "Argentine, Steak, South American",
      rating: 4.9,
      deliveryTime: "45-55 min",
      distance: "4.8 km",
      discount: "20% OFF"
    },
    {
      id: "r1023",
      name: "Peking Duck House",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
      cuisine: "Chinese, Peking Duck, Asian",
      rating: 4.7,
      deliveryTime: "40-50 min",
      distance: "4.1 km",
    },
    {
      id: "r1024",
      name: "Portuguese Grill",
      image: "https://images.unsplash.com/photo-1615937691194-98e5b172bff2?w=800&q=80",
      cuisine: "Portuguese, European, Seafood",
      rating: 4.6,
      deliveryTime: "35-45 min",
      distance: "3.7 km",
      discount: "25% OFF"
    },
  ];

  const cuisineFilters = [
    "All Cuisines",
    "Indian",
    "Chinese",
    "Italian",
    "Thai",
    "Mexican",
    "Japanese",
    "American",
    "Korean",
    "Mediterranean",
    "French",
    "Vietnamese",
    "Middle Eastern",
    "Brazilian",
    "Spanish",
    "Turkish",
    "Ethiopian",
    "Caribbean",
    "German",
    "Moroccan",
    "Argentine",
    "Portuguese",
    "Fast Food"
  ];

  // Filter restaurants based on search and cuisine
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = searchQuery === "" || 
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCuisine = selectedCuisine === "All Cuisines" ||
      restaurant.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase());
    
    return matchesSearch && matchesCuisine;
  });

  // Sort restaurants
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "delivery":
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case "distance":
        return parseFloat(a.distance) - parseFloat(b.distance);
      case "discount":
        const aDiscount = a.discount ? parseInt(a.discount) : 0;
        const bDiscount = b.discount ? parseInt(b.discount) : 0;
        return bDiscount - aDiscount;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {selectedCuisine !== "All Cuisines" ? `${selectedCuisine} Restaurants` : "All Restaurants"}
          </h1>
          <p className="text-muted-foreground">
            {searchQuery ? `Search results for "${searchQuery}"` : "Discover the best restaurants near you"}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search restaurants or dishes..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="delivery">Fastest Delivery</SelectItem>
                  <SelectItem value="distance">Nearest</SelectItem>
                  <SelectItem value="discount">Best Offers</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cuisine Filters */}
          <div className="flex flex-wrap gap-2">
            {cuisineFilters.map((filter) => (
              <Badge
                key={filter}
                variant={filter === selectedCuisine ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCuisine(filter)}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{sortedRestaurants.length}</span> restaurants
          </p>
        </div>

        {/* Restaurant Grid */}
        {sortedRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No restaurants found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCuisine("All Cuisines");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {sortedRestaurants.length > 0 && (
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Load More Restaurants
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}