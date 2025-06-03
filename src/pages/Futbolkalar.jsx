import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
  Alert,
} from "@material-tailwind/react";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";

export function Futbolkalar() {
  const [showAlert, setShowAlert] = useState(false);

  const arr = [
    {
      link: "https://static-prod.logosoftwear.com/img/landing-pages/tshirts/custom-short-sleeve-t-shirts-1x.png",
      name: "Custom T-Shirts",
      price: "99 000",
    },
    {
      link: "https://bandadda.com/wp-content/uploads/2023/03/front-6425b8251568d-White_S_Men_Round.jpg",
      name: "Its Time For FUNK Tshirt - BandAdda Rock",
      price: "149 000",
    },
    {
      link: "https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604870+u-mgihjk9ywffxfwjtkbrl+v-fn0trzdceyzwsnzaj1op.jpg?_hv=2&w=400",
      name: "Lionel Messi Jerseys, Kits, Lionel Messi (Hojatxona uchun)",
      price: "1 000",
    },
  ];

  // 10 soniya alert uchun effekt
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
    <div className="flex flex-col items-center gap-6">
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <Alert
            color="green"
            className="w-96 text-center relative"
            dismissible={false} // default dismissible tugma ishlamaydi, shuning uchun o‘zimiz yasaymiz
          >
            Sotib olish uchun iltimos <strong>+93 753 53 22</strong> raqamiga murojaat qiling!
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-2 right-2 text-green-800 hover:text-green-600 font-bold text-xl"
              aria-label="Close"
            >
              <FaXmark />
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
