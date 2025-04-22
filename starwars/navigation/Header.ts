export const defaultHeaderOptions = (title: string) => ({
  headerShown: true,
  headerTitle: title,
  headerStyle: {
    backgroundColor: "rgb(0, 0, 0)",
  },
  headerTitleAlign: "center" as const,
  headerTintColor: "#fff",
  headerShadowVisible: false,
});
