import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const PageTitle = ({ title }: { title: string }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null;
};
