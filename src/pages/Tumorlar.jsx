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

export default function Tumorlar() {
  const [showAlert, setShowAlert] = useState(false);

  const arr = [
    {
      link: "https://atlasaccessories.com/cdn/shop/articles/pexels-cottonbro-5602536.jpg?v=1724062340&width=1900",
      name: "The History and Modern Use of Amulets",
      price: "499 000",
    },
    {
      link: "https://atlasaccessories.com/cdn/shop/articles/main-image.jpg?v=1683711440",
      name: "History of Amulets – Atlas Accessories",
      price: "999 000",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Talisman_de_Charlemagne_Tau.jpg",
      name: "Talisman - amulet (haqiqiy rudalardan qilingan)",
      price: "199 000 000",
    },
  ];

  // Alertni 10 soniya davomida ko'rsatish uchun useEffect
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
      {/* Alert orqasida qoramtir fon bilan va o‘rtada chiqadi */}
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
