interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;  // changed from color
  coverUrl: string;    // changed from cover
  videoUrl: string;    // changed from video
  summary: string;
  isLoanedBook?: boolean;
}
