# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Student.create(name:"Tom R",email:"Tom@gmail.com",pic:"" );
Student.create(name:"Kelly M",email:"Kelly@gmail.com",pic:"" );
Student.create(name:"Martha F",email:"Martha@gmail.com",pic:"" );
Student.create(name:"1018K k",email:"1018K k@gmail.com",pic:"" );
Student.create(name:"Phil G",email:"Phil G@gmail.com",pic:"" );
Student.create(name:"Mok c",email:"Mok c@gmail.com",pic:"" );
Student.create(name:"Vasya p",email:"Vasya@gmail.com",pic:"" );

User.create(username: "alpha", password:"123", name:"John Doe", email:"john@example.com", pic:"", is_instructor: true); 
User.create(username: "omega", password:"123", name:"Jane Doe", email:"jane@example.com", pic:"", is_instructor: true);
User.create(username: "delta", password:"123", name:"Don Doe", email:"Don@example.com", pic:"", is_instructor: true);

Discipline.create(name: "Math", pic:"", user_id:1);
Discipline.create(name: "Art", pic:"", user_id:2);
Discipline.create(name: "Sculpture", pic:"", user_id:3);
Discipline.create(name: "Art2", pic:"", user_id:3);


Appoitment.create(:start_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)),discipline_id:1,student_id:1 );
Appoitment.create(:start_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)),discipline_id:1,student_id:2 );
Appoitment.create(:start_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)),discipline_id:1,student_id:3 );
Appoitment.create(:start_time => DateTime.new(2012, 9, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 10, 29, 9, 0, 0,Rational(-4,24)),discipline_id:2,student_id:1 );
Appoitment.create(:start_time => DateTime.new(2012, 9, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 10, 29, 9, 0, 0,Rational(-4,24)),discipline_id:2,student_id:2 );
Appoitment.create(:start_time => DateTime.new(2012, 9, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 10, 29,9, 0, 0,Rational(-4,24)),discipline_id:2,student_id:3 );
Appoitment.create(:start_time => DateTime.new(2012, 10, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 11, 0, 0,Rational(-4,24)),discipline_id:3,student_id:1 );
Appoitment.create(:start_time => DateTime.new(2012, 10, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 11, 0, 0,Rational(-4,24)),discipline_id:3,student_id:2 );
Appoitment.create(:start_time => DateTime.new(2012, 10, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 11, 0, 0,Rational(-4,24)),discipline_id:3,student_id:3 );
Appoitment.create(:start_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)),discipline_id:1,student_id:4 );
Appoitment.create(:start_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)),discipline_id:1,student_id:5 );
Appoitment.create(:start_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)), :end_time => DateTime.new(2012, 8, 29, 9, 0, 0,Rational(-4,24)),discipline_id:1,student_id:6 );


Attendance.create(appoitment_id:1, is_attended: [true,false].sample);
Attendance.create(appoitment_id:2, is_attended: [true,false].sample);
Attendance.create(appoitment_id:3, is_attended: [true,false].sample);
Attendance.create(appoitment_id:4, is_attended: [true,false].sample);
Attendance.create(appoitment_id:5, is_attended: [true,false].sample);
Attendance.create(appoitment_id:6, is_attended: [true,false].sample);
Attendance.create(appoitment_id:7, is_attended: [true,false].sample);
Attendance.create(appoitment_id:8, is_attended: [true,false].sample);
Attendance.create(appoitment_id:9, is_attended: [true,false].sample);
Attendance.create(appoitment_id:10, is_attended: [true,false].sample);
Attendance.create(appoitment_id:11, is_attended: [true,false].sample);
Attendance.create(appoitment_id:12, is_attended: [true,false].sample);
