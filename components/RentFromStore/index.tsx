import { useRouter } from 'next/navigation';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { faker } from '@faker-js/faker';
import styles from './index.module.css';
import { Select, MenuItem } from '@mui/material';

const generateRandomStores = (count: number) => {
  const stores = [];
  for (let i = 0; i < count; i++) {
    const store = {
      id: i + 1,
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
      imageUrl: faker.image.url(),
    };
    stores.push(store);
  }
  return stores;
};

export default function RentFromStore(props) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState('sdfsdff');
  const stores = generateRandomStores(4);
  const hasStores = stores.length > 0;

  const handleCitySelect = (event) => {
    setSelectedCity(event.target.value);
    console.log('Selected City:', event.target.value);
  };

  return (
    <div className="bg-black p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-4 text-center">
          Find Nearest Store
        </h1>
        <div
          className={`${styles.finderContainer} flex justify-between items-center md:space-x-4 md:mb-8 sm:space-x-4 sm:mb-8`}
        >
          <InputLabel id="province-label">Province</InputLabel>
          <Select
            labelId="province-label"
            className="bg-white"
            value={selectedCity}
            onChange={handleCitySelect}
          >
            {props.provinces.map((current, index) => (
              <MenuItem key={index} value={current.name}>
                {current.name}
              </MenuItem>
            ))}
          </Select>
          <Select className="bg-white">
            <MenuItem value="Küçükçekmece">Küçükçekmece</MenuItem>
            <MenuItem value="Büyükçekmece">Büyükçekmece</MenuItem>
            <MenuItem value="Bakıköy">Bakırköy</MenuItem>
          </Select>
          <Select className="bg-white">
            <MenuItem value="">Neighborhood</MenuItem>
            <MenuItem value="Atakent">Atakent</MenuItem>
            <MenuItem value="İstasyon">İstasyon</MenuItem>
            <MenuItem value="Beşyol">Beşyol</MenuItem>
          </Select>
          <Button className="text-white">Find</Button>
        </div>
        {hasStores ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stores.map((store, index) => (
              <Card key={index} className="w-full">
                <CardHeader>
                  <CardTitle>{store.name}</CardTitle>
                  <CardDescription>{store.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Store"
                    className="w-full h-auto"
                    height="200"
                    src={store.imageUrl}
                    style={{
                      aspectRatio: '300/200',
                      objectFit: 'cover',
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Details</Button>
                  <Button
                    className="text-white"
                    onClick={() => router.push(`/store/${store.id}`)}
                  >
                    Select
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-white text-center mt-8">
            Please select a location to see stores.
          </p>
        )}
      </div>
    </div>
  );
}
