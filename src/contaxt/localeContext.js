import React, { createContext, Component } from "react";

export const { Provider, Consumer } = createContext();

class LocaleProvider extends Component {
  state = {
    locale: "en",
    users: [],
  };
  render() {
    const { children } = this.props;
    const { locale, users } = this.state;
    return (
      <Provider
        value={{
          locale: locale,
          users: users,
          changeLocale: (newLocale) => {
            this.setState({ locale: newLocale });
          },
          getUsers: async () => {
            const res = await fetch("http://localhost:8080/users");
            const usrs = await res.json();
            this.setState({ users: usrs });
          },
        }}
      >
        {children}
      </Provider>
    );
  }
}

export default LocaleProvider;
