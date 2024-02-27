import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export default function RentFromStore() {
  return (
    <div className="bg-black p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-4 text-center">Find Nearest Store</h1>
        <div className="flex justify-between items-center space-x-4 mb-8">
          <Select>
            <SelectTrigger id="city">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="new-york">İstanbul</SelectItem>
              <SelectItem value="los-angeles">Ankara</SelectItem>
              <SelectItem value="chicago">Bursa</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="district">
              <SelectValue placeholder="District" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="downtown">Küçükçekmece</SelectItem>
              <SelectItem value="uptown">Büyükçekmece</SelectItem>
              <SelectItem value="midtown">Bakırköy</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="neighborhood">
              <SelectValue placeholder="Neighborhood" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="soho">Atakent</SelectItem>
              <SelectItem value="greenwich">İstasyon</SelectItem>
              <SelectItem value="chelsea">Beşyol</SelectItem>
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
