class CreateSlots < ActiveRecord::Migration[6.1]
  def change
    create_table :slots do |t|
      t.date :date
      t.time :s_time
      t.string :e_time
      t.boolean :is_marked
      t.references :discipline, null: false, foreign_key: true

      t.timestamps
    end
  end
end
