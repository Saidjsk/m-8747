import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-primary">Welcome to Our Store</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover our curated collection of premium products designed for you.
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
          <Link to="/products">Shop Now</Link>
        </Button>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {["Free Shipping", "24/7 Support", "Money Back Guarantee"].map((feature) => (
          <div key={feature} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-2">{feature}</h3>
            <p className="text-gray-600">
              We ensure the best shopping experience for our customers.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;