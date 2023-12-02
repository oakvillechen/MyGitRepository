/* enum EmployeeType
{
  swe,
  fin,
  qa
} */

/* This is demo for Map
 * 
final list =[10,15,30]  ;
    Map<String, int> marks = {'lucas': 90, 'jolie': 100, 'guodong': 110};
  print(marks['jolie']);
  print(marks);
 * */

/* This is demo for enum



final emp1 = Employee('lucas', EmployeeType.swe);
print('${emp1.name} is a ${emp1.type.name}');

}

class Employee{
  final String name;
  final EmployeeType type;
  Employee(this.name, this.type);
}

*/

import 'package:http/http.dart' as http;
import 'dart:convert';

void main() async {
  var url = Uri.https('jsonplaceholder.typicode.com', 'users/1');

  try {
    final res = await http.get(url);
    print(jsonDecode(res.body)['username']);
  } catch (e) {
    print(e.toString());
  }
countDown().listen((val)
  {print(val);});


// final result = await giveResult2Sec();
// print(result);

/* try {
  print(10~/0);
} catch (e) {
  print("something went wrong: $e");
  
} */

//Furtures (promise)
}

Future<String> giveResult2Sec() async {
  await Future.delayed(Duration(seconds: 2));
  return 'my result';
}

Stream<int> countDown() async*
{
  for(int i = 5; i>0; i--)
  {
    yield i;
    await Future.delayed(Duration(seconds: 1));
  }
}