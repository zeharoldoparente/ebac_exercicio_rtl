import { fireEvent, render, screen } from "@testing-library/react";
import Post from "./index";

describe("Teste para o componente Post", () => {
   it("Deve renderizar os comentários corretamente", () => {
      render(<Post />);

      const textarea = screen.getByTestId("comment-input");

      fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });
      fireEvent.click(screen.getByTestId("submit-button"));

      expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

      fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
      fireEvent.click(screen.getByTestId("submit-button"));

      expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
   });
});
