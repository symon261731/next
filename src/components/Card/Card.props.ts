export interface ICardProps {
      info: {
            id: string;
            title: string;
            createdAt: string;
            kind: string;
            text: string;
            url: string;
            likes: string | number;
            timeToRead: string | number;
      };
}
