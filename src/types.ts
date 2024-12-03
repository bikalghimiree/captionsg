export interface Video {
  id: string;
  file: File;
  captions: Caption[];
  status: 'uploading' | 'transcribing' | 'ready' | 'error';
  userId: string;
  createdAt: Date;
}

export interface Caption {
  id: string;
  start: number;
  end: number;
  text: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}