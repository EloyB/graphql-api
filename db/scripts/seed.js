import { connection } from "mongoose";
import connectDB from "../";
import {
  Category,
  Company,
  Grape,
  User,
  UserType,
  Vineyard,
  Wine,
  WineCategories,
} from "../models";

const seed = async () => {
  console.log("Cleanning database");

  await connectDB();
  await connection.dropDatabase();

  console.log("Database clean");

  const userTypes = [
    new UserType({ name: "Client" }),
    new UserType({ name: "Admin" }),
    new UserType({ name: "Vineyard" }),
  ];

  const categories = [
    new Category({ name: "Category 1" }),
    new Category({ name: "Category 2" }),
    new Category({ name: "Category 3" }),
    new Category({ name: "Category 4" }),
  ];

  const companies = [
    new Company({
      name: "Comp1",
      vatNumber: "1234321",
      address: "some street 8847",
      country: "Belgium",
    }),
    new Company({
      name: "Comp2",
      vatNumber: "1234321",
      address: "some street 8847",
      country: "Belgium",
    }),
  ];

  const users = [
    new User({
      email: "test1@wine.com",
      firstName: "Eloy",
      lastName: "Boone",
      phone: "0478774497",
      shippingAddress: "some street 123",
      gender: "male",
      company: companies[0]._id,
      password: "test123",
      userType: userTypes[0]._id,
    }),
  ];

  const vineyards = [
    new Vineyard({
      name: "Vin1",
      country: "Italy",
      region: "Veneto",
      yearOfIncorporation: 1998,
      story: "lisjflisjeflsijeflijsef",
    }),
    new Vineyard({
      name: "Vin2",
      country: "France",
      region: "Bordeaux",
      yearOfIncorporation: 2009,
      story: "kwewierwieriweriweri",
    }),
  ];

  const grapes = [
    new Grape({
      name: "Grape1",
      country: "Italy",
      region: "Veneto",
    }),
    new Grape({
      name: "Grape2",
      country: "France",
      region: "Bordeaux",
    }),
  ];

  // Obviously fake names
  const wines = [
    new Wine({
      name: "Scriani",
      price: 15.5,
      description: "some wine",
      imageUrl: "url",
      rating: 4,
      available: true,
      grape: grapes[0]._id,
      vineyard: vineyards[0]._id,
    }),
    new Wine({
      name: "Solatio",
      price: 20.5,
      description: "some wine",
      imageUrl: "url",
      rating: 4.5,
      available: true,
      grape: grapes[1]._id,
      vineyard: vineyards[1]._id,
    }),
  ];

  const wineCategories = [
    new WineCategories({ wine: wines[0]._id, category: categories[0]._id }),
    new WineCategories({ wine: wines[0]._id, category: categories[2]._id }),
    new WineCategories({ wine: wines[0]._id, category: categories[0]._id }),
    new WineCategories({ wine: wines[1]._id, category: categories[1]._id }),
    new WineCategories({ wine: wines[1]._id, category: categories[3]._id }),
  ];

  const savings = [
    ...userTypes.map((userType) => userType.save()),
    ...companies.map((company) => company.save()),
    ...categories.map((category) => category.save()),
    ...users.map((user) => user.save()),
    ...vineyards.map((user) => user.save()),
    ...grapes.map((user) => user.save()),
    ...wines.map((user) => user.save()),
    ...wineCategories.map((winecategory) => winecategory.save()),
  ];

  await Promise.all(savings);

  console.log("Database seeded");

  connection.close();
};

seed();
