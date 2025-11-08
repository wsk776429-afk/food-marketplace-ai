"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Package, MapPin, Clock, CheckCircle2, Truck, Phone } from "lucide-react";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [showTracking, setShowTracking] = useState(false);

  const handleTrack = () => {
    if (orderId.trim()) {
      setShowTracking(true);
    }
  };

  // Sample order data
  const orderData = {
    orderId: "ORD-20251108-000123",
    createdAt: "2025-11-08T09:10:00",
    restaurant: {
      name: "Spice Villa",
      address: "12 MG Road, Bangalore"
    },
    delivery: {
      address: "Flat 201, Sunrise Apartments, 4th Cross, Bangalore",
      eta: "09:55 AM"
    },
    courier: {
      name: "Rajan",
      phone: "+91 99001 12233"
    },
    items: [
      { name: "Paneer Butter Masala", qty: 1, price: 180 },
      { name: "Garlic Naan", qty: 2, price: 80 }
    ],
    payment: {
      method: "UPI",
      amount: 258.20,
      status: "Completed"
    },
    status: [
      { code: "PLACED", label: "Order Placed", time: "09:10 AM", completed: true },
      { code: "ACCEPTED", label: "Restaurant Accepted", time: "09:13 AM", completed: true },
      { code: "PREPARING", label: "Preparing Your Food", time: "09:20 AM", completed: true },
      { code: "OUT_FOR_DELIVERY", label: "Out for Delivery", time: "09:45 AM", completed: true },
      { code: "DELIVERED", label: "Delivered", time: "Expected by 09:55 AM", completed: false }
    ]
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Track Your Order</h1>
          <p className="text-muted-foreground">
            Enter your order ID to track your delivery in real-time
          </p>
        </div>

        {/* Track Order Input */}
        {!showTracking ? (
          <Card>
            <CardHeader>
              <CardTitle>Enter Order Details</CardTitle>
              <CardDescription>
                You can find your order ID in the confirmation email or SMS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter Order ID (e.g., ORD-20251108-000123)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleTrack} size="lg">
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Order Status Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Order #{orderData.orderId}</CardTitle>
                    <CardDescription>
                      Placed on {new Date(orderData.createdAt).toLocaleString()}
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-600">
                    Out for Delivery
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Status Timeline */}
                <div className="space-y-6">
                  {orderData.status.map((status, index) => (
                    <div key={status.code} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          status.completed 
                            ? "bg-green-100 text-green-600" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {status.completed ? (
                            <CheckCircle2 className="h-6 w-6" />
                          ) : (
                            <Clock className="h-6 w-6" />
                          )}
                        </div>
                        {index < orderData.status.length - 1 && (
                          <div className={`h-12 w-0.5 ${
                            status.completed ? "bg-green-600" : "bg-muted"
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h3 className={`font-semibold ${
                          status.completed ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {status.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">{status.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Truck className="h-5 w-5 mr-2" />
                    Courier Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Delivery Partner</p>
                      <p className="font-semibold">{orderData.courier.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Contact Number</p>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{orderData.courier.phone}</p>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Delivering to</p>
                      <p className="font-semibold">{orderData.delivery.address}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expected Arrival</p>
                      <p className="font-semibold text-green-600">{orderData.delivery.eta}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">From</p>
                    <p className="font-semibold">{orderData.restaurant.name}</p>
                    <p className="text-sm text-muted-foreground">{orderData.restaurant.address}</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Items</p>
                    <div className="space-y-2">
                      {orderData.items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{item.name} × {item.qty}</span>
                          <span>₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Subtotal</span>
                      <span className="text-sm">₹260.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Delivery Charge</span>
                      <span className="text-sm">₹30.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Discount</span>
                      <span className="text-sm text-green-600">-₹50.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Taxes</span>
                      <span className="text-sm">₹18.20</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Paid</span>
                      <span>₹{orderData.payment.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Payment Method</span>
                      <Badge variant="outline">{orderData.payment.method}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button variant="outline" onClick={() => setShowTracking(false)}>
                Track Another Order
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
