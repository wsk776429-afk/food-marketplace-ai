import Image from "next/image";
import Link from "next/link";
import { Star, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  distance: string;
  discount?: string;
}

export const RestaurantCard = ({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  distance,
  discount,
}: RestaurantCardProps) => {
  return (
    <Link href={`/restaurant/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          {discount && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              {discount}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{cuisine}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{distance}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
