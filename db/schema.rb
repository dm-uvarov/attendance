# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_07_144744) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appoitments", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.bigint "discipline_id", null: false
    t.bigint "student_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["discipline_id"], name: "index_appoitments_on_discipline_id"
    t.index ["student_id"], name: "index_appoitments_on_student_id"
  end

  create_table "attendances", force: :cascade do |t|
    t.boolean "is_attended"
    t.bigint "appoitment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["appoitment_id"], name: "index_attendances_on_appoitment_id"
  end

  create_table "disciplines", force: :cascade do |t|
    t.string "name"
    t.string "pic"
    t.text "description"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_disciplines_on_user_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "pic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "name"
    t.string "email"
    t.string "pic"
    t.boolean "is_instructor"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appoitments", "disciplines"
  add_foreign_key "appoitments", "students"
  add_foreign_key "attendances", "appoitments"
  add_foreign_key "disciplines", "users"
end
