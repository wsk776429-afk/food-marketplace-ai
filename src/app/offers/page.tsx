import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Gift, Sparkles, Tag } from "lucide-react";

export default function OffersPage() {
  const offers = [
    {
      id: "O-202511-FEST",
      title: "Festival Special",
      description: "Get flat ₹50 off on orders above ₹200",
      code: "FEST50",
      discount: "₹50 OFF",
      validUntil: "Nov 30, 2025",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: "O-202511-NEW",
      title: "New User Offer",
      description: "First order? Get 60% off up to ₹120",
      code: "NEW60",
      discount: "60% OFF",
      validUntil: "Dec 31, 2025",
      icon: Gift,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: "O-202511-SAVE",
      title: "Weekend Savings",
      description: "Save 40% on orders above ₹300 every weekend",
      code: "WEEKEND40",
      discount: "40% OFF",
      validUntil: "Sundays Only",
      icon: Percent,
      color: "bg-green-100 text-green-600"
    },
    {
      id: "O-202511-FREE",
      title: "Free Delivery",
      description: "No delivery charges on orders above ₹150",
      code: "FREEDEL",
      discount: "FREE DELIVERY",
      validUntil: "Nov 25, 2025",
      icon: Tag,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: "O-202511-BANK",
      title: "Bank Offer",
      description: "Get 30% off with HDFC cards, max ₹100",
      code: "HDFC30",
      discount: "30% OFF",
      validUntil: "Nov 20, 2025",
      icon: Percent,
      color: "bg-red-100 text-red-600"
    },
    {
      id: "O-202511-COMBO",
      title: "Combo Deal",
      description: "Order 2+ items and get 25% off on total bill",
      code: "COMBO25",
      discount: "25% OFF",
      validUntil: "Nov 28, 2025",
      icon: Gift,
      color: "bg-pink-100 text-pink-600"
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Exclusive Offers
          </h1>
          <p className="text-muted-foreground text-lg">
            Save more on your favorite food with our special deals and discounts
          </p>
        </div>

        {/* Banner */}
        <Card className="mb-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
          <CardContent className="p-8 text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Festival Season is Here!</h2>
            <p className="text-lg opacity-90 mb-4">
              Get amazing discounts on all your favorite restaurants
            </p>
            <Badge className="bg-white text-primary text-lg px-4 py-2">
              Up to 60% OFF
            </Badge>
          </CardContent>
        </Card>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card key={offer.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`h-12 w-12 rounded-lg ${offer.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary">{offer.discount}</Badge>
                  </div>
                  <CardTitle className="text-xl">{offer.title}</CardTitle>
                  <CardDescription className="text-base">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Promo Code</p>
                        <p className="font-mono font-bold text-lg">{offer.code}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Copy
                      </Button>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Valid until</span>
                      <span className="font-medium">{offer.validUntil}</span>
                    </div>
                    <Button className="w-full">Apply Offer</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How to Use */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use Promo Codes</CardTitle>
            <CardDescription>Follow these simple steps to apply your discount</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold">Choose Your Food</h3>
                <p className="text-sm text-muted-foreground">
                  Browse restaurants and add items to your cart
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold">Apply Promo Code</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the code at checkout to get instant discount
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold">Enjoy Your Meal</h3>
                <p className="text-sm text-muted-foreground">
                  Place your order and save money on delicious food
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
