import { createSlice } from "@reduxjs/toolkit";

// Function to load users from local storage
export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("users");
    return serializedState ? JSON.parse(serializedState) : null;
  } catch (e) {
    console.error("Could not load users from local storage", e);
    return null;
  }
};

// Function to save users to local storage
export const saveToLocalStorage = (users) => {
  try {
    const serializedState = JSON.stringify(users);
    localStorage.setItem("users", serializedState);
  } catch (e) {
    console.error("Could not save users to local storage", e);
  }
};

const initialUsers = loadFromLocalStorage() || [
  {
    id: 1,
    name: "Olivia Rhye",
    username: "@olivia",
    email: "olivia.rhye@example.com",
    status: "Active",
    role: "Developer",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "29-04-2005",
    gender: "Female",
    nationality: "Canadian",
    contactNumber: "1234567890",
    workEmail: "Oliviadesign@gmail.com",
    researchPublications: [
      {
        title: "AI and User Experience: The Future of Design",
        publication: "Published in the Journal of Modern Design ",
        year: 2023,
        about:
          "This research explores how artificial intelligence can enhance user experience in modern design practices, focusing on human-centered approaches.",
      },
      {
        title:
          "AI, IoT Based Real-Time Condition Monitoring of Electrical Machines Using Python",
        publication: "Published in Industrial Engineering Journal ",
        year: 2021,
        about:
          "This paper delves into how AI and IoT technologies can be applied to real-time condition monitoring of electrical machines to prevent failures in small businesses.",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    username: "@john",
    email: "john.doe@example.com",
    status: "Inactive",
    role: "Designer",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "15-06-1998",
    gender: "Male",
    nationality: "American",
    contactNumber: "9876543210",
    workEmail: "john.doe.work@example.com",
    researchPublications: [
      {
        title: "Designing for Accessibility: A Human-Centered Approach",
        publication: "Published in UX Design Weekly ",
        year: 2021,
        about:
          "This study focuses on designing accessible interfaces that cater to users with disabilities, emphasizing inclusive and human-centered design principles.",
      },
    ],
  },
  {
    id: 3,
    name: "Jane Smith",
    username: "@jane",
    email: "jane.smith@example.com",
    status: "Active",
    role: "Product Manager",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "20-08-1992",
    gender: "Female",
    nationality: "British",
    contactNumber: "5556667777",
    workEmail: "jane.smith@company.com",
    researchPublications: [
      {
        title: "Effective Product Management Strategies in Tech",
        publication: "Published in Product Management Journal ",
        year: 2023,
        about:
          "The research outlines strategies for effective product management in the tech industry, focusing on agile practices and cross-functional collaboration.",
      },
    ],
  },
  {
    id: 4,
    name: "Alice Johnson",
    username: "@alice",
    email: "alice.johnson@example.com",
    status: "Pending",
    role: "Analyst",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "02-03-1987",
    gender: "Female",
    nationality: "Australian",
    contactNumber: "4445556666",
    workEmail: "alice.johnson@analytics.com",
    researchPublications: [
      {
        title: "Data Analysis Techniques for Business",
        publication: "Published in Data Science Review",
        year: 2021,
        about:
          "This research discusses key data analysis techniques that businesses can implement to enhance decision-making and improve operational efficiency.",
      },
    ],
  },
  {
    id: 5,
    name: "Bob Brown",
    username: "@bob",
    email: "bob.brown@example.com",
    status: "Active",
    role: "Marketing Manager",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "10-12-1985",
    gender: "Male",
    nationality: "Canadian",
    contactNumber: "2223334444",
    workEmail: "bob.brown@marketing.com",
    researchPublications: [
      {
        title: "Marketing in the Digital Age",
        publication: "Published in Marketing Insights",
        year: 2020,
        about:
          "The paper explores the shift in marketing strategies due to digital transformation, focusing on data-driven approaches and personalized campaigns.",
      },
    ],
  },
  {
    id: 6,
    name: "Charlie White",
    username: "@charlie",
    email: "charlie.white@example.com",
    status: "Active",
    role: "Sales Executive",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "25-09-1991",
    gender: "Male",
    nationality: "British",
    contactNumber: "8889990000",
    workEmail: "charlie.white@sales.com",
    researchPublications: [
      {
        title: "Sales Strategies for Emerging Markets",
        publication: "Published in Global Sales Journal",
        year: 2022,
        about:
          "This study analyzes effective sales strategies tailored for emerging markets, with a focus on customer engagement and localized approaches.",
      },
    ],
  },
  {
    id: 7,
    name: "David Green",
    username: "@david",
    email: "david.green@example.com",
    status: "Pending",
    role: "Data Scientist",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "15-04-1994",
    gender: "Male",
    nationality: "American",
    contactNumber: "7778889999",
    workEmail: "david.green@data.com",
    researchPublications: [
      {
        title: "Machine Learning Algorithms for Predictive Analytics",
        publication: "Published in AI and Data Science Journal ",
        year: 2021,
        about:
          "The paper presents a comprehensive guide to machine learning algorithms that can be applied in predictive analytics across various industries.",
      },
    ],
  },
  {
    id: 8,
    name: "Emily Clark",
    username: "@emily",
    email: "emily.clark@example.com",
    status: "Inactive",
    role: "Content Writer",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "05-11-1997",
    gender: "Female",
    nationality: "Canadian",
    contactNumber: "1112223333",
    workEmail: "emily.clark@content.com",
    researchPublications: [
      {
        title: "Content Marketing Strategies for Startups",
        publication: "Published in Startup Marketing Weekly",
        year: 2020,
        about:
          "This research provides insights into content marketing strategies specifically designed to help startups build brand presence and drive growth.",
      },
    ],
  },
  {
    id: 9,
    name: "Frank Martin",
    username: "@frank",
    email: "frank.martin@example.com",
    status: "Active",
    role: "Finance Manager",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "18-01-1980",
    gender: "Male",
    nationality: "Australian",
    contactNumber: "3334445555",
    workEmail: "frank.martin@finance.com",
    researchPublications: [
      {
        title: "Financial Planning for Small Businesses",
        publication: "Published in Finance Today ",
        year: 2019,
        about:
          "This research offers practical financial planning strategies that small businesses can implement to manage resources effectively and ensure sustainability.",
      },
    ],
  },
  {
    id: 10,
    name: "Grace Adams",
    username: "@grace",
    email: "grace.adams@example.com",
    status: "Active",
    role: "HR Manager",
    teams: ["product", "marketing", "developer", "sales", "finance"],
    dateOfBirth: "12-07-1989",
    gender: "Female",
    nationality: "American",
    contactNumber: "6667778888",
    workEmail: "grace.adams@hr.com",
    researchPublications: [
      {
        title: "The Future of HR in the Digital Age",
        publication: "Published in HR Leadership Journal ",
        year: 2023,
        about:
          "This paper discusses the transformation of HR practices due to digital technologies, with a focus on automation, data-driven decision-making, and employee experience.",
      },
    ],
  },
];

// Initial state with users and filter criteria
const initialState = {
  users: initialUsers,
  searchQuery: "",
  filterCriteria: {
    roles: [],
    teams: [],
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
      saveToLocalStorage(state.users); // Save to local storage
    },
    addUser(state, action) {
      state.users.push(action.payload);
      saveToLocalStorage(state.users); // Save to local storage
    },
    updateUser(state, action) {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
        saveToLocalStorage(state.users); // Save to local storage
      }
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
      saveToLocalStorage(state.users); // Save to local storage
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFilterCriteria(state, action) {
      state.filterCriteria = { ...state.filterCriteria, ...action.payload };
    },
  },
});

export const {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  setSearchQuery,
  setFilterCriteria,
} = dataSlice.actions;

// Load users from local storage initially
saveToLocalStorage(initialUsers);

export default dataSlice.reducer;
