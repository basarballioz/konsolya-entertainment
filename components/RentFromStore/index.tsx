import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { faker } from '@faker-js/faker';
import styles from './index.module.css';

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

export default function RentFromStore() {
  const router = useRouter();
  const stores = generateRandomStores(4);
  const hasStores = stores.length > 0;

  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleChange = (event, type) => {
    const value = event.target.value;
    if (type === 'city') {
      setCity(value);
      setDistrict('');
      setNeighborhood('');
    } else if (type === 'district') {
      setDistrict(value);
    } else if (type === 'neighborhood') {
      setNeighborhood(value);
    }
  };


  return (
    <div className="bg-black p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-4 text-center">Find Nearest Store</h1>
        <div className={`${styles.finderContainer} flex justify-between items-center md:space-x-4 md:mb-8 sm:space-x-4 sm:mb-8`}>

          <FormControl fullWidth>
            <InputLabel id="city-select-label">City</InputLabel>
            <Select
              sx={{ backgroundColor: '#fff' }}
              labelId="city-dropdown-select-label"
              id="city-selector"
              value={city}
              label="City"
              onChange={(e) => handleChange(e, 'city')}
              fullWidth
            >
              <MenuItem value={"İstanbul"}>İstanbul</MenuItem>
              <MenuItem value={"Ankara"}>Ankara</MenuItem>
              <MenuItem value={"İzmir"}>İzmir</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="district-select-label">District</InputLabel>
            <Select
              sx={{ backgroundColor: '#fff' }}
              labelId="district-dropdown-select-label"
              id="district-selector"
              value={district}
              label="District"
              onChange={(e) => handleChange(e, 'district')}
              fullWidth
            >
              <MenuItem value={"Atakent"}>Atakent</MenuItem>
              <MenuItem value={"Bakırköy"}>Bakırköy</MenuItem>
              <MenuItem value={"Sinanoba"}>Sinanoba</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="neighborhood-select-label">Neighborhood</InputLabel>
            <Select
              sx={{ backgroundColor: '#fff' }}
              labelId="neighborhood-dropdown-select-label"
              id="neighborhood-selector"
              value={neighborhood}
              label="Neighborhood"
              onChange={(e) => handleChange(e, 'neighborhood')}
              fullWidth
            >
              <MenuItem value={"Kartaltepe"}>Kartaltepe</MenuItem>
              <MenuItem value={"Lounge"}>Lounge</MenuItem>
              <MenuItem value={"Evostar"}>Evostar</MenuItem>
            </Select>
          </FormControl>
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
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Details</Button>
                  <Button className="text-white" onClick={() => router.push(`/store/${store.id}`)}>Select</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-white text-center mt-8">Please select a location to see stores.</p>
        )}
      </div>
    </div>
  );
}