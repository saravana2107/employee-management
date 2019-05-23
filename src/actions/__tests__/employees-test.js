import { add, del, toggleModal } from "../employees";

describe("employees actions", () => {
  it("should add employee", () => {
    expect(
      add({
        id: "ALTI123456",
        name: "Test User #1",
        email: "test+1@altimetric.com",
        phone: "9876543210",
        address: "Kudlu Gate",
        city: "Bangalore",
        state: "Karnataka",
        zipcode: "560068",
        gender: "Male"
      })
    ).toMatchSnapshot();
  });

  it("should delete employee", () => {
    expect(del("ALTI123456")).toMatchSnapshot();
  });

  it("should toggle modal", () => {
    expect(toggleModal()).toMatchSnapshot();
  });

  it("should toggle modal with employee id", () => {
    expect(toggleModal("ALTI123456")).toMatchSnapshot();
  });
});
