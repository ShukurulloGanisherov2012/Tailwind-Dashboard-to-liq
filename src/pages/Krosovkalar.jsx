import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Alert,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function Krosovkalar() {
  const [showAlert, setShowAlert] = useState(false);

  const arr = [
    {
      link: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21253582/2024/12/23/8141610c-1191-49ed-8b40-e019ecdde8fe1734937712083-Nike-Boys-Perforations-Dunk-Low-GS-Regular-Sneakers-94517349-1.jpg",
      name: "White Nike Dunk Low Suede Sneakers",
      price: "199 000",
    },
    {
      link: "https://i.pinimg.com/736x/bc/3b/be/bc3bbe1c05b4db1b7c61bd3d16df70b4.jpg",
      name: "Boys' Big Kids' Nike Air Force 1 Mid LV8 Leather Casual Shoes",
      price: "249 000",
    },
    {
      link: "https://5.imimg.com/data5/SELLER/Default/2021/7/LV/JH/SO/133892487/whatsapp-image-2021-07-28-at-4-20-06-pm.jpeg",
      name: "Boys white and black Nike Air Max Shoes",
      price: "399 000",
    },
  ];

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleBuy = () => {
    setShowAlert(true);
  };

  return (
    <div>
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <Alert
            color="green"
            className="w-96 text-center relative"
            dismissible={false}
          >
            Sotib olish uchun iltimos <strong>+93 753 53 22</strong> raqamiga murojaat qiling!

            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-2 right-2 text-green-800 hover:text-green-600 font-bold text-xl"
              aria-label="Close"
            >
              ×
            </button>
          </Alert>
        </div>
      )}

      <div className="flex flex-wrap gap-6 justify-center">
        {arr.map((item, index) => (
          <Card key={index} className="w-80 shadow-lg">
            <CardHeader floated={false} className="h-72">
              <img
                src={item.link}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                {item.name}
              </Typography>
              <Typography color="gray" className="font-medium text-lg">
                {item.price} so‘m
              </Typography>
            </CardBody>
            <CardFooter className="w-full p-2">
              <Button className="w-full" onClick={handleBuy}>
                Sotib olish
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
