class CreateAttendances < ActiveRecord::Migration[6.1]
  def change
    create_table :attendances do |t|
      t.references :appointment, null: false, foreign_key: true
      t.boolean :is_attended, default: false
      t.timestamps
    end
  end
end
