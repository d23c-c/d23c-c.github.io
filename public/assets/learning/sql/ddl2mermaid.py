import sqlite3
from pathlib import Path

connection = sqlite3.connect(":memory:")
connection.executescript(Path("fixtures.sql").read_text(encoding="utf-8"))
tables = [row[0] for row in connection.execute(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
)]
print("erDiagram")
for table in tables:
    quoted = '"' + table.replace('"', '""') + '"'
    foreign_keys = connection.execute(f"PRAGMA foreign_key_list({quoted})").fetchall()
    fk_columns = {row[3] for row in foreign_keys}
    for row in foreign_keys:
        print(f'    {row[2]} ||--o{{ {table} : "{row[3]}"')
    print(f"    {table} {{")
    for _, name, kind, required, default, primary in connection.execute(f"PRAGMA table_info({quoted})"):
        keys = []
        if primary:
            keys.append("PK")
        if name in fk_columns:
            keys.append("FK")
        print(f"        {kind.lower() or 'text'} {name} {','.join(keys)}".rstrip())
    print("    }")
connection.close()
