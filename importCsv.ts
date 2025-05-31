import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from '../models/Property';

dotenv.config();

mongoose.connect(process.env.MONGO_URI!, { dbName: 'propertyDB' })
  .then(() => {
    console.log('MongoDB connected');
    importCSV();
  });

function importCSV() {
  const results: any[] = [];

  fs.createReadStream(path.join(__dirname, '../../../db424fd9fb74_1748258398689.csv'))
    .pipe(csv())
    .on('data', (data) => {
      results.push({
        name: data.name,
        type: data.type,
        price: parseFloat(data.price),
        location: data.location,
        bedrooms: parseInt(data.bedrooms),
        bathrooms: parseInt(data.bathrooms),
        area: parseFloat(data.area),
        amenities: data.amenities?.split(',') || [],
        images: data.images?.split(',') || [],
        listedDate: new Date(data.listedDate),
      });
    })
    .on('end', async () => {
      try {
        await Property.insertMany(results);
        console.log('Data imported successfully!');
        process.exit();
      } catch (err) {
        console.error('Error importing data:', err);
        process.exit(1);
      }
    });
}
