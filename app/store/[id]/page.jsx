import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { faker } from '@faker-js/faker';

let storeImage = faker.image.url();
let productImage = faker.image.url();

export default function StoreDetails() {
    return (<div>
        <Breadcrumb
            pageName="Store Details"
            description="Store Details of Store"
        />
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <img
                        alt="Internet Cafe"
                        className="rounded-lg w-full h-auto"
                        height={600}
                        src={storeImage}
                        style={{
                            aspectRatio: "800/600",
                            objectFit: "cover",
                        }}
                        width={800}
                    />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Acme Internet Cafe</h1>
                    <div className="text-gray-500 dark:text-gray-400">
                        <p>123 Main St, Anytown USA 12345</p>
                        <p>Open 24 hours</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Hours</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Monday - Friday: 8am - 8pm
                            <br />
                            Saturday - Sunday: 10am - 6pm
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Services</h2>
                        <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                            <li>Comfortable seating and workstations</li>
                            <li>Complimentary beverages and snacks</li>
                            <li>Friendly and knowledgeable staff</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        <a className="text-blue-600 hover:underline" href="#">
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Products</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
                        <img
                            alt="Product-1"
                            className="rounded-t-lg w-full h-auto"
                            height={200}
                            src={productImage}
                            style={{
                                aspectRatio: "300/200",
                                objectFit: "cover",
                            }}
                            width={300}
                        />
                        <div className="p-4 space-y-2">
                            <h3 className="text-lg font-semibold">Snacks and Drinks</h3>
                            <p className="text-gray-500 dark:text-gray-400">Refuel with our selection of snacks and beverages.</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold">$2-$5</span>
                                <Button className="text-white" size="sm">Buy Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}