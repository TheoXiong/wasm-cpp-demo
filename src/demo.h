#include <string>
#include <emscripten/bind.h>

using namespace emscripten;

class Demo
{
  public:
    Demo (int v, std::string n);

    int getValue (void) const;
    void redouble (void);

    std::string getName (void) const;
    void setName (std::string n);
    void changeName (const std::string &n);

  private:
    int value;
    std::string name;
};

struct StructObj
{
  int a;
  char b;
  short c;
  std::string d;
};

struct StructArr 
{
  int a;
  std::string b;
  std::string c;
  std::string d;
};

struct StructComplex
{
  StructObj obj;
  StructArr arr;
  int num;
  std::vector<double> data;
};

