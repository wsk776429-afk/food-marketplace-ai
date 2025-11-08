# FoodFlow XML Schema Documentation

This document describes the XML data format used by FoodFlow for AI integration and data exchange.

## Overview

FoodFlow uses XML format for order management, restaurant listings, and payment callbacks to ensure easy integration with AI systems and external platforms.

## XML Schema Elements

### 1. Order Structure

The main Order element contains all information about a food delivery order.

```xml
<Order xmlns="http://example.com/foodflow">
  <OrderID>ORD-20251108-000123</OrderID>
  <CreatedAt>2025-11-08T09:10:00+05:30</CreatedAt>
  <User>...</User>
  <Restaurant>...</Restaurant>
  <Items>...</Items>
  <Payment>...</Payment>
  <Delivery>...</Delivery>
  <StatusHistory>...</StatusHistory>
</Order>
```

### 2. User Information

```xml
<User>
  <UserID>U12345</UserID>
  <Name>Ravi Kumar</Name>
  <Email>ravi@example.com</Email>
  <Phone>+919812345678</Phone>
  <Verified>true</Verified>
</User>
```

### 3. Restaurant Information

```xml
<Restaurant>
  <RestID>R998</RestID>
  <Name>Spice Villa</Name>
  <Address>12 MG Road, Bangalore</Address>
  <Phone>+919876543210</Phone>
  <Geo>
    <Latitude>12.9716</Latitude>
    <Longitude>77.5946</Longitude>
  </Geo>
</Restaurant>
```

### 4. Order Items

```xml
<Items>
  <Item>
    <ItemID>I1001</ItemID>
    <Name>Paneer Butter Masala (Regular)</Name>
    <Qty>1</Qty>
    <UnitPrice>180.00</UnitPrice>
    <Options>
      <Option>Extra Butter</Option>
    </Options>
    <TotalPrice>180.00</TotalPrice>
  </Item>
</Items>
```

### 5. Payment Information

```xml
<Payment>
  <Method>UPI</Method>
  <Provider>PayProviderX</Provider>
  <Amount>258.20</Amount>
  <Currency>INR</Currency>
  <TxnID>TXN-789012</TxnID>
  <Status>Completed</Status>
  <PaidAt>2025-11-08T09:12:10+05:30</PaidAt>
</Payment>
```

### 6. Delivery Information

```xml
<Delivery>
  <Address>Flat 201, Sunrise Apartments, 4th Cross, Bangalore</Address>
  <Latitude>12.9716</Latitude>
  <Longitude>77.5946</Longitude>
  <ETA>2025-11-08T09:55:00+05:30</ETA>
  <Courier>
    <CourierID>C5001</CourierID>
    <Name>Rajan</Name>
    <Phone>+919900112233</Phone>
  </Courier>
</Delivery>
```

### 7. Status History

```xml
<StatusHistory>
  <Status>
    <Code>PLACED</Code>
    <Label>Order placed</Label>
    <Actor>User</Actor>
    <Timestamp>2025-11-08T09:10:00+05:30</Timestamp>
  </Status>
  <Status>
    <Code>ACCEPTED</Code>
    <Label>Restaurant accepted</Label>
    <Actor>Restaurant</Actor>
    <Timestamp>2025-11-08T09:13:00+05:30</Timestamp>
  </Status>
</StatusHistory>
```

## Status Codes

FoodFlow uses the following standard status codes:

- **PLACED** - Order has been placed by the customer
- **ACCEPTED** - Restaurant has accepted the order
- **PREPARING** - Food is being prepared
- **READY** - Food is ready for pickup
- **OUT_FOR_DELIVERY** - Courier is on the way
- **DELIVERED** - Order has been delivered
- **CANCELLED** - Order was cancelled
- **REFUNDED** - Payment has been refunded

## Order Status Request/Response

### Request
```xml
<OrderStatusRequest xmlns="http://example.com/foodflow">
  <OrderID>ORD-20251108-000123</OrderID>
  <UserID>U12345</UserID>
</OrderStatusRequest>
```

### Response
```xml
<OrderStatusResponse xmlns="http://example.com/foodflow">
  <OrderID>ORD-20251108-000123</OrderID>
  <CurrentStatus>OUT_FOR_DELIVERY</CurrentStatus>
  <StatusLabel>Out for delivery</StatusLabel>
  <ETA>2025-11-08T09:55:00+05:30</ETA>
  <Courier>
    <CourierID>C5001</CourierID>
    <Name>Rajan</Name>
    <Phone>+919900112233</Phone>
  </Courier>
</OrderStatusResponse>
```

## Payment Callback

Webhook format for payment confirmations:

```xml
<PaymentCallback xmlns="http://example.com/foodflow">
  <OrderID>ORD-20251108-000123</OrderID>
  <TxnID>TXN-789012</TxnID>
  <Method>UPI</Method>
  <Provider>PayProviderX</Provider>
  <Amount>258.20</Amount>
  <Currency>INR</Currency>
  <Status>Completed</Status>
  <PaidAt>2025-11-08T09:12:10+05:30</PaidAt>
</PaymentCallback>
```

## User Signup

```xml
<UserSignup xmlns="http://example.com/foodflow">
  <UserID>U12345</UserID>
  <Name>Ravi Kumar</Name>
  <Email>ravi@example.com</Email>
  <Phone>+919812345678</Phone>
  <PasswordHash>...</PasswordHash>
  <CreatedAt>2025-11-08T09:00:00+05:30</CreatedAt>
</UserSignup>
```

## Restaurant Listing

```xml
<RestaurantListing xmlns="http://example.com/foodflow">
  <RestID>R998</RestID>
  <Name>Spice Villa</Name>
  <Address>12 MG Road, Bangalore</Address>
  <Phone>+919876543210</Phone>
  <Geo>
    <Latitude>12.9716</Latitude>
    <Longitude>77.5946</Longitude>
  </Geo>
  <Menu>
    <Item>
      <ItemID>I1001</ItemID>
      <Name>Paneer Butter Masala (Regular)</Name>
      <Price>180.00</Price>
      <Available>true</Available>
    </Item>
  </Menu>
</RestaurantListing>
```

## AI Chatbot Integration

The XML format is designed to be easily parsed by AI systems for:

- Order tracking queries
- Status updates
- Delivery time estimation
- Order history retrieval
- Customer support automation

Example chatbot query:
```
User: "Where is my order ORD-20251108-000123?"
System: Parse OrderStatusRequest XML → Query database → Return OrderStatusResponse XML → Generate natural language response
```

## Data Validation

All XML documents should validate against the XSD schema provided in the repository. Key validation rules:

- OrderID format: ORD-YYYYMMDD-NNNNNN
- Phone numbers: Include country code (+91 for India)
- Timestamps: ISO 8601 format with timezone
- Amounts: Decimal with 2 decimal places
- Currency: 3-letter ISO code (INR, USD, etc.)

## Security Considerations

- Always validate XML against the schema
- Sanitize all input data
- Use HTTPS for all API endpoints
- Encrypt sensitive data (payment info, passwords)
- Implement rate limiting
- Verify webhook signatures

---

For the complete XSD schema file, refer to `foodflow-schema.xsd` in this directory.
