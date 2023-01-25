import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart';

void main() {
  //performTasks();
  getData();
}

Future<void> performTasks() async {
  task1();
  String? task2Result = await task2();
  task3(task2Result!);
}

void task1() {
  String result = 'task 1 data';
  print('Task 1 completed! ');
}

Future task2() async {
  Duration threeSeconds = Duration(seconds: 3);
  // sleep(threeSeconds);
  String? result;
  await Future.delayed(threeSeconds, () {
    result = 'task 2 data';
    print('Task 2 completed! ');
  });

  return result;
}

void task3(String task2Data) {
  //task2Data = 'task 3 data';
  print('Task 3 completed! with $task2Data');
}

Future<void> getData() async {
  Response response = await get(Uri.parse(
      'https://api.openweathermap.org/data/2.5/weather?lat=43.45&lon=-79.68&appid=282dd41d05159464b5722fc9e837357e&units=metric'));

  if (response.statusCode == 200) {
    String data = response.body;
    //var jsonResponse = jsonDecode(response.body) as Map<String, dynamic>;
    var longitude = jsonDecode(data)['coord']['lon'];
    // ßprint(data);
    double temp = jsonDecode(data)['main']['temp'];
    int temperture = temp.toInt();
    print('Today\'s temp is : $temperture');
    var city = jsonDecode(data)['name'];
    print('City: $city');
  } else {
    print(response.statusCode);
  }

  // var jsonResponse = jsonDecode(response.body) as Map<String, dynamic>;
  //   var itemCount = jsonResponse['weather'];
  //   print('Today\'s temp is $itemCount[1]');
  // } else {
  //   print('Request failed with status: ${response.statusCode}.');
  // }
}
