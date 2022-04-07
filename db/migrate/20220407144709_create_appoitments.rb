class CreateAppoitments < ActiveRecord::Migration[6.1]
  def change
    create_table :appoitments do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.references :discipline, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
