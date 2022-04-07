class CreateDisciplines < ActiveRecord::Migration[6.1]
  def change
    create_table :disciplines do |t|
      t.string :name
      t.string :pic
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
