import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODMyZmQwMzNmOTEzMzBhNjRiZjcyZWQyZTI5Mjg2YyIsIm5iZiI6MTc1OTI1MjI1NC4zMDgsInN1YiI6IjY4ZGMwZjFlOWRmYWEyNzkyZGM3NzEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oEFUVm3Xe8IBYFqUVBAhdNav5m1HLHOwQnxO8KtR6yc`,
  },
});

export default api;