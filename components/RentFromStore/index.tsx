import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export default function RentFromStore() {
  return (
    <div className="bg-black p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-4 text-center">Find Nearest Store</h1>
        <div className="flex justify-between items-center md:space-x-4 md:mb-8 sm:space-x-4 sm:mb-8">
          <Select>
            <SelectTrigger id="city">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="İstanbul">İstanbul</SelectItem>
              <SelectItem value="Ankara">Ankara</SelectItem>
              <SelectItem value="Bursa">Bursa</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="district">
              <SelectValue placeholder="District" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="Küçükçekmece">Küçükçekmece</SelectItem>
              <SelectItem value="Büyükçekmece">Büyükçekmece</SelectItem>
              <SelectItem value="Bakırköy">Bakırköy</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="neighborhood">
              <SelectValue placeholder="Neighborhood" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="Atakent">Atakent</SelectItem>
              <SelectItem value="İstasyon">İstasyon</SelectItem>
              <SelectItem value="Beşyol">Beşyol</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-red-600 text-white">Find</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Random Cafe</CardTitle>
              <CardDescription>Her türlü PS4, PS5 kiralama işleri.</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="Store"
                className="w-full h-auto"
                height="200"
                src="/images/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">İncele</Button>
              <Button>Seç</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
