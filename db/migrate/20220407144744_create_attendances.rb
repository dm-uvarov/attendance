class CreateAttendances < ActiveRecord::Migration[6.1]
  def change
    create_table :attendances do |t|
      t.boolean :is_attended
      t.references :appoitment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
