#include "demo.h"

int square (int a)
{
  return a * a;
}
char getChar ()
{
  return 'X';
}
std::string getString ()
{
  return std::string("string-test");
}

Demo::Demo (int v, std::string n) 
{ 
  value = v;
  name = n;
}
int Demo::getValue (void) const
{
  return value;
}
void Demo::redouble (void)
{
  value *= 2;
}
std::string Demo::getName (void) const
{
  return name;
}
void Demo::setName (std::string n)
{
  name = n;
}
void Demo::changeName (const std::string &n)
{
  name = n;
}

StructObj getStructObj (int a, std::string b)
{
  StructObj s;
  s.a = a;
  s.b = 'B';
  s.c = 345;
  s.d = b;
  return s;
}

StructArr getStructArr ()
{
  StructArr s;
  s.a = 3;
  s.b = "member-b";
  s.c = "member-c";
  s.d = "member-d";
  return s;
}

StructComplex getStructComplex ()
{
  StructComplex sc;
  sc.obj.a = 123;
  sc.obj.b = 'B';
  sc.obj.c = 345;
  sc.obj.d = "sc-str";
  sc.arr.a = 3;
  sc.arr.b = "member-b";
  sc.arr.c = "member-c";
  sc.arr.d = "member-d";
  sc.num = 999;
  sc.data = {1.2, 3.4, 5.6};
  return sc;
}

std::vector<StructArr> getArrayVector ()
{
  std::vector<StructArr> v;

  for (int i = 0; i < 5; i++) {
    StructArr s = { i, "member-b", "member-c", "member-d" };
    v.push_back(s);
  }

  return v;
}

std::vector<StructComplex> getStructVector ()
{
  std::vector<StructComplex> v;
  StructComplex s1 = getStructComplex();
  StructComplex s2 = getStructComplex();

  v.push_back(s1);
  v.push_back(s2);

  return v;
}

std::vector<Demo> getClassVector ()
{
  std::vector<Demo> v;
  Demo d1(1, "d1");
  Demo d2(2, "d2");

  v.push_back(d1);
  v.push_back(d2);

  return v;
}


EMSCRIPTEN_BINDINGS(demo) {
  function("square", &square);
  function("getChar", &getChar);
  function("getString", &getString);
  function("getStructObj", &getStructObj);
  function("getStructArr", &getStructArr);
  function("getStructComplex", &getStructComplex);
  function("getArrayVector", &getArrayVector);
  function("getStructVector", &getStructVector);
  function("getClassVector", &getClassVector);

  class_<Demo>("Demo")
    .constructor<int, std::string>()
    .function("redouble", &Demo::redouble)
    .function("changeName", &Demo::changeName)
    .property("value", &Demo::getValue)
    .property("name", &Demo::getName, &Demo::setName)
    ;

  value_object<StructObj>("StructObj")
    .field("a", &StructObj::a)
    .field("b", &StructObj::b)
    .field("c", &StructObj::c)
    .field("d", &StructObj::d)
    ;

  value_array<StructArr>("StructArr")
    .element(&StructArr::a)
    .element(&StructArr::b)
    .element(&StructArr::c)
    .element(&StructArr::d)
    ;

  value_object<StructComplex>("StructComplex")
    .field("obj", &StructComplex::obj)
    .field("arr", &StructComplex::arr)
    .field("num", &StructComplex::num)
    .field("data", &StructComplex::data)
    ;

  register_vector<StructArr>("StructArr");
  register_vector<StructComplex>("StructVector");
  register_vector<Demo>("ClassVector");
  register_vector<double>("DoubleVector");
}


