import 'package:get/get.dart';
import 'package:toppings_app/views/screens/home_screen.dart';

part 'app_routes.dart';

class AppPages {
  static const initial = Routes.home;

  static final routes = [
    GetPage(
      name: Routes.home,
      page: () => const HomeScreen(),
      transition: Transition.cupertino,
    ),
  ];
}
